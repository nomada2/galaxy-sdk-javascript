//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//


HttpStatusCode = {
  'BAD_REQUEST' : 400,
  'INVALID_AUTH' : 401,
  'CLOCK_TOO_SKEWED' : 412,
  'REQUEST_TOO_LARGE' : 413,
  'INTERNAL_ERROR' : 500
};
ErrorCode = {
  'INTERNAL_ERROR' : 1,
  'SERVICE_UNAVAILABLE' : 2,
  'UNKNOWN' : 3,
  'END_OF_INTERNAL_ERROR' : 20,
  'ACCESS_DENIED' : 21,
  'VALIDATION_FAILED' : 22,
  'SIZE_EXCEED' : 23,
  'QUOTA_EXCEED' : 24,
  'THROUGHPUT_EXCEED' : 25,
  'RESOURCE_NOT_FOUND' : 26,
  'RESOURCE_ALREADY_EXISTS' : 27,
  'RESOURCE_UNAVAILABLE' : 28,
  'UNSUPPORTED_VERSION' : 29,
  'UNSUPPORTED_OPERATION' : 30,
  'INVALID_AUTH' : 31,
  'CLOCK_TOO_SKEWED' : 32,
  'REQUEST_TOO_LARGE' : 33,
  'BAD_REQUEST' : 34,
  'TTRANSPORT_ERROR' : 35
};
RetryType = {
  'SAFE' : 0,
  'UNSAFE' : 1
};
ServiceException = function(args) {
  this.errorCode = null;
  this.errorMessage = null;
  this.details = null;
  this.callId = null;
  if (args) {
    if (args.errorCode !== undefined) {
      this.errorCode = args.errorCode;
    }
    if (args.errorMessage !== undefined) {
      this.errorMessage = args.errorMessage;
    }
    if (args.details !== undefined) {
      this.details = args.details;
    }
    if (args.callId !== undefined) {
      this.callId = args.callId;
    }
  }
};
Thrift.inherits(ServiceException, Thrift.TException);
ServiceException.prototype.name = 'ServiceException';
ServiceException.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.errorCode = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.errorMessage = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.details = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.callId = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ServiceException.prototype.write = function(output) {
  output.writeStructBegin('ServiceException');
  if (this.errorCode !== null && this.errorCode !== undefined) {
    output.writeFieldBegin('errorCode', Thrift.Type.I32, 1);
    output.writeI32(this.errorCode);
    output.writeFieldEnd();
  }
  if (this.errorMessage !== null && this.errorMessage !== undefined) {
    output.writeFieldBegin('errorMessage', Thrift.Type.STRING, 2);
    output.writeString(this.errorMessage);
    output.writeFieldEnd();
  }
  if (this.details !== null && this.details !== undefined) {
    output.writeFieldBegin('details', Thrift.Type.STRING, 3);
    output.writeString(this.details);
    output.writeFieldEnd();
  }
  if (this.callId !== null && this.callId !== undefined) {
    output.writeFieldBegin('callId', Thrift.Type.STRING, 4);
    output.writeString(this.callId);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ERROR_BACKOFF = {2 : 1000,
25 : 1000,
32 : 0,
1 : 1000,
35 : 1000
};
ERROR_RETRY_TYPE = {2 : 0,
25 : 0,
32 : 0,
1 : 1,
35 : 1
};
MAX_RETRY = 1;
