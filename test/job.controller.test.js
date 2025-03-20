
// job.routes.test.js (Mocha/Chai/CommonJS)

const request = require('supertest');
const express = require('express');
const { expect } = require('chai');
const sinon = require('sinon');
const mongoose = require('mongoose');
const { StatusCodes: httpStatus } = require("http-status-codes");
const proxyquire = require('proxyquire');

describe('Job Routes', () => {
  let app;
  let jobControllerStub;
  let JobControllerStub;
  let jobRoutes;
  
  beforeEach(() => {
    // Create a fresh Express app for each test
    app = express();
    app.use(express.json());
    
    // Create stubs for all controller methods
    jobControllerStub = {
      create: sinon.stub(),
      getAll: sinon.stub(),
      getByTitle: sinon.stub(),
      getById: sinon.stub(),
      updatePrice: sinon.stub()
    };
    
    // Create a constructor stub that returns our method stubs
    JobControllerStub = sinon.stub().returns(jobControllerStub);
    
    // Use proxyquire to replace the JobController with our stub
    jobRoutes = proxyquire('../src/modules/job/job.routes', {
      './job.controller': { JobController: JobControllerStub }
    });
    
    // Mount the router
    app.use(jobRoutes.JobRoutes);
  });
  
  afterEach(() => {
    sinon.restore();
  });
  
  describe('Route: POST /create', () => {
    it('should call the create controller method with request body', async () => {
      const mockJobData = { 
        code: 'JOB001', 
        title: 'Test Job', 
        dailySalary: 100 
      };
      
      // Make the controller respond with success
      jobControllerStub.create.callsFake((req, res) => {
        expect(req.body).to.deep.equal(mockJobData);
        return res.status(httpStatus.CREATED).json({
          statusCode: httpStatus.CREATED,
          data: { job: { ...mockJobData, _id: 'some-id' } }
        });
      });
      
      const response = await request(app)
        .post('/create')
        .send(mockJobData)
        .expect(httpStatus.CREATED);
      
      expect(jobControllerStub.create.calledOnce).to.be.true;
      expect(response.body.statusCode).to.equal(httpStatus.CREATED);
      expect(response.body.data.job.title).to.equal(mockJobData.title);
    });
  });
  
  describe('Route: GET /getAll', () => {
    it('should call the getAll controller method', async () => {
      const mockJobs = [
        { _id: '1', code: 'JOB001', title: 'Job 1', dailySalary: 100 },
        { _id: '2', code: 'JOB002', title: 'Job 2', dailySalary: 200 }
      ];
      
      jobControllerStub.getAll.callsFake((req, res) => {
        return res.status(httpStatus.OK).json({
          statusCode: httpStatus.OK,
          data: { jobs: mockJobs }
        });
      });
      
      const response = await request(app)
        .get('/getAll')
        .expect(httpStatus.OK);
      
      expect(jobControllerStub.getAll.calledOnce).to.be.true;
      expect(response.body.data.jobs).to.have.lengthOf(2);
      expect(response.body.data.jobs[0].title).to.equal('Job 1');
    });
  });
  
  describe('Route: GET /getByTitle/:title', () => {
    it('should call the getByTitle controller method with title parameter', async () => {
      const mockTitle = 'Test Job';
      const mockJob = { _id: '1', code: 'JOB001', title: mockTitle, dailySalary: 100 };
      
      jobControllerStub.getByTitle.callsFake((req, res) => {
        expect(req.params.title).to.equal(mockTitle);
        return res.status(httpStatus.OK).json({
          statusCode: httpStatus.OK,
          data: { job: mockJob }
        });
      });
      
      const response = await request(app)
        .get(`/getByTitle/${mockTitle}`)
        .expect(httpStatus.OK);
      
      expect(jobControllerStub.getByTitle.calledOnce).to.be.true;
      expect(response.body.data.job.title).to.equal(mockTitle);
    });
  });
  
  describe('Route: GET /getById/:id', () => {
    it('should call the getById controller method with id parameter', async () => {
      const mockId = new mongoose.Types.ObjectId().toString();
      const mockJob = { _id: mockId, code: 'JOB001', title: 'Test Job', dailySalary: 100 };
      
      jobControllerStub.getById.callsFake((req, res) => {
        expect(req.params.id).to.equal(mockId);
        return res.status(httpStatus.OK).json({
          statusCode: httpStatus.OK,
          data: { job: mockJob }
        });
      });
      
      const response = await request(app)
        .get(`/getById/${mockId}`)
        .expect(httpStatus.OK);
      
      expect(jobControllerStub.getById.calledOnce).to.be.true;
      expect(response.body.data.job._id).to.equal(mockId);
    });
  });
  
  describe('Route: PATCH /updatePrice', () => {
    it('should call the updatePrice controller method with request body', async () => {
      const mockData = { oldPrice: 100, newPrice: 200 };
      const mockResult = { modifiedCount: 2 };
      
      jobControllerStub.updatePrice.callsFake((req, res) => {
        expect(req.body).to.deep.equal(mockData);
        return res.status(httpStatus.OK).json({
          statusCode: httpStatus.OK,
          data: { job: mockResult }
        });
      });
      
      const response = await request(app)
        .patch('/updatePrice')
        .send(mockData)
        .expect(httpStatus.OK);
      
      expect(jobControllerStub.updatePrice.calledOnce).to.be.true;
      expect(response.body.data.job.modifiedCount).to.equal(2);
    });
  });
  
  describe('Error handling', () => {
    it('should handle errors from routes properly', async () => {
      const mockError = new Error('Test error');
      
      jobControllerStub.getAll.callsFake((req, res, next) => {
        next(mockError);
      });
      
      // Add error handling middleware
      app.use((err, req, res, next) => {
        expect(err).to.equal(mockError);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ 
          statusCode: httpStatus.INTERNAL_SERVER_ERROR,
          message: 'Internal Server Error' 
        });
      });
      
      await request(app)
        .get('/getAll')
        .expect(httpStatus.INTERNAL_SERVER_ERROR);
      
      expect(jobControllerStub.getAll.calledOnce).to.be.true;
    });
  });
  
  describe('Router initialization', () => {
    it('should create a JobController instance when routes are initialized', () => {
      // Re-require the routes module to verify constructor is called
      delete require.cache[require.resolve('../src/modules/job/job.routes')];
      JobControllerStub.resetHistory();
      
      const freshJobRoutes = require('../src/modules/job/job.routes');
      
      expect(JobControllerStub.calledOnce).to.be.true;
      expect(freshJobRoutes).to.have.property('JobRoutes');
    });
  });
});
