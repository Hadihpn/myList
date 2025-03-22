const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Worker Schema
const WorkerSchema = new Schema(
  {
    DSW_ID1: {
      type: String,
      trim: true,
    },
    DSW_FNAME: {
      type: String,
      trim: true,
    },
    DSW_LNAME: {
      type: String,
      trim: true,
    },
    DSW_DNAME: {
      type: String,
      trim: true,
    },
    DSW_IDNO: {
      type: String,
      trim: true,
    },
    DSW_IDPLC: {
      type: String,
      trim: true,
    },
    DSW_IDATE: {
      type: Date,
      trim: true,
    },
    DSW_BDATE: {
      type: Date,
      trim: true,
    },
    DSW_SEX: {
      type: String,
      trim: true,
    },
    DSW_NAT: {
      type: String,
      trim: true,
    },
    DSW_OCP: {
      type: String,
      trim: true,
    },
    DSW_SDATE: {
      type: Date,
      trim: true,
    },
    DSW_EDATE: {
      type: Date,
      trim: true,
    },
    DSW_DD: {
      type: Number,
      trim: true,
    },
    DSW_ROOZ: {
      type: Number,
      trim: true,
    },
    DSW_MAH: {
      type: Number,
      trim: true,
    },
    DSW_MAZ: {
      type: Number,
      trim: true,
    },
    DSW_MASH: {
      type: Number,
      trim: true,
    },
    DSW_TOTL: {
      type: Number,
      trim: true,
    },
    DSW_BIME: {
      type: Number,
      trim: true,
    },
    DSW_PRATE: {
      type: Number,
      trim: true,
    },
    DSW_JOB: {
      type: String,
      trim: true,
    },
    PER_NATCOD: {
      type: String,
      trim: true,
    },
    DSW_INC: {
      type: Number,
      trim: true,
    },
    DSW_SPOUSE: {
      type: Number,
      trim: true,
    },
    CPU: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// Factory List Schema
const FactoryListSchema = new Schema(
  {
    DSK_ID: {
      type: String,
      trim: true,
    },
    DSK_NAME: {
      type: String,
      required: true,
      trim: true,
    },
    DSK_FARM: {
      type: String,
      trim: true,
    },
    DSK_ADRS: {
      type: String,
      trim: true,
    },
    DSK_KIND: {
      type: String,
      trim: true,
    },
    DSK_YY: {
      type: Number,
      trim: true,
    },
    DSK_MM: {
      type: Number,
      trim: true,
    },
    DSK_LISTNO: {
      type: Number,
      trim: true,
    },
    DSK_DISC: {
      type: Number,
      trim: true,
    },
    DSK_NUM: {
      type: Number,
      trim: true,
    },
    DSK_TDD: {
      type: Number,
      trim: true,
    },
    DSK_TROOZ: {
      type: Number,
      trim: true,
    },
    DSK_TMAH: {
      type: Number,
      trim: true,
    },
    DSK_TMAZ: {
      type: Number,
      trim: true,
    },
    DSK_TMASH: {
      type: Number,
      trim: true,
    },
    DSK_TTOTL: {
      type: Number,
      trim: true,
    },
    DSK_TBIME: {
      type: Number,
      trim: true,
    },
    DSK_TKOSO: {
      type: Number,
      trim: true,
    },
    DSK_BIC: {
      type: Number,
      trim: true,
    },
    DSK_RATE: {
      type: Number,
      trim: true,
    },
    DSK_PRATE: {
      type: Number,
      trim: true,
    },
    DSK_BIMH: {
      type: String,
      trim: true,
    },
    MON_PYM: {
      type: Number,
      trim: true,
    },
    DSK_INC: {
      type: Number,
      trim: true,
    },
    DSK_SPOUSE: {
      type: Number,
      trim: true,
    },
    CPU: {
      type: String,
      trim: true,
    },
    workers: [
      {
        type: Schema.Types.ObjectId,
        ref: "Worker",
        default: [],
      },
    ],
    komakDolat: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create models from schemas
const Worker = mongoose.model("Worker", WorkerSchema);
const FactoryList = mongoose.model("FactoryList", FactoryListSchema);

module.exports = {
  Worker,
  FactoryList,
};
