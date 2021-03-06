//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//


//HELPER FUNCTIONS AND STRUCTURES

BaseService_getServerVersion_args = function(args) {
};
BaseService_getServerVersion_args.prototype = {};
BaseService_getServerVersion_args.prototype.read = function(input) {
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
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BaseService_getServerVersion_args.prototype.write = function(output) {
  output.writeStructBegin('BaseService_getServerVersion_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

BaseService_getServerVersion_result = function(args) {
  this.success = null;
  this.se = null;
  if (args instanceof ServiceException) {
    this.se = args;
    return;
  }
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
    if (args.se !== undefined) {
      this.se = args.se;
    }
  }
};
BaseService_getServerVersion_result.prototype = {};
BaseService_getServerVersion_result.prototype.read = function(input) {
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
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new Version();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.se = new ServiceException();
        this.se.read(input);
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

BaseService_getServerVersion_result.prototype.write = function(output) {
  output.writeStructBegin('BaseService_getServerVersion_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.se !== null && this.se !== undefined) {
    output.writeFieldBegin('se', Thrift.Type.STRUCT, 1);
    this.se.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

BaseService_validateClientVersion_args = function(args) {
  this.clientVersion = null;
  if (args) {
    if (args.clientVersion !== undefined) {
      this.clientVersion = args.clientVersion;
    }
  }
};
BaseService_validateClientVersion_args.prototype = {};
BaseService_validateClientVersion_args.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.STRUCT) {
        this.clientVersion = new Version();
        this.clientVersion.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BaseService_validateClientVersion_args.prototype.write = function(output) {
  output.writeStructBegin('BaseService_validateClientVersion_args');
  if (this.clientVersion !== null && this.clientVersion !== undefined) {
    output.writeFieldBegin('clientVersion', Thrift.Type.STRUCT, 1);
    this.clientVersion.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

BaseService_validateClientVersion_result = function(args) {
  this.se = null;
  if (args instanceof ServiceException) {
    this.se = args;
    return;
  }
  if (args) {
    if (args.se !== undefined) {
      this.se = args.se;
    }
  }
};
BaseService_validateClientVersion_result.prototype = {};
BaseService_validateClientVersion_result.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.STRUCT) {
        this.se = new ServiceException();
        this.se.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BaseService_validateClientVersion_result.prototype.write = function(output) {
  output.writeStructBegin('BaseService_validateClientVersion_result');
  if (this.se !== null && this.se !== undefined) {
    output.writeFieldBegin('se', Thrift.Type.STRUCT, 1);
    this.se.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

BaseService_getServerTime_args = function(args) {
};
BaseService_getServerTime_args.prototype = {};
BaseService_getServerTime_args.prototype.read = function(input) {
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
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BaseService_getServerTime_args.prototype.write = function(output) {
  output.writeStructBegin('BaseService_getServerTime_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

BaseService_getServerTime_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
BaseService_getServerTime_result.prototype = {};
BaseService_getServerTime_result.prototype.read = function(input) {
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
      case 0:
      if (ftype == Thrift.Type.I64) {
        this.success = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BaseService_getServerTime_result.prototype.write = function(output) {
  output.writeStructBegin('BaseService_getServerTime_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.I64, 0);
    output.writeI64(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

BaseServiceClient = function(input, output) {
    this.input = input;
    this.output = (!output) ? input : output;
    this.seqid = 0;
};
BaseServiceClient.prototype = {};
BaseServiceClient.prototype.getServerVersion = function(callback) {
  if (callback === undefined) {
    this.send_getServerVersion();
    return this.recv_getServerVersion();
  } else {
    var postData = this.send_getServerVersion(true);
    return this.output.getTransport()
      .jqRequest(this, postData, arguments, this.recv_getServerVersion);
  }
};

BaseServiceClient.prototype.send_getServerVersion = function(callback) {
  this.output.writeMessageBegin('getServerVersion', Thrift.MessageType.CALL, this.seqid);
  var args = new BaseService_getServerVersion_args();
  args.write(this.output);
  this.output.writeMessageEnd();
  return this.output.getTransport().flush(callback);
};

BaseServiceClient.prototype.recv_getServerVersion = function() {
  var ret = this.input.readMessageBegin();
  var fname = ret.fname;
  var mtype = ret.mtype;
  var rseqid = ret.rseqid;
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(this.input);
    this.input.readMessageEnd();
    throw x;
  }
  var result = new BaseService_getServerVersion_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.se) {
    throw result.se;
  }
  if (null !== result.success) {
    return result.success;
  }
  throw 'getServerVersion failed: unknown result';
};
BaseServiceClient.prototype.validateClientVersion = function(clientVersion, callback) {
  if (callback === undefined) {
    this.send_validateClientVersion(clientVersion);
    this.recv_validateClientVersion();
  } else {
    var postData = this.send_validateClientVersion(clientVersion, true);
    return this.output.getTransport()
      .jqRequest(this, postData, arguments, this.recv_validateClientVersion);
  }
};

BaseServiceClient.prototype.send_validateClientVersion = function(clientVersion, callback) {
  this.output.writeMessageBegin('validateClientVersion', Thrift.MessageType.CALL, this.seqid);
  var args = new BaseService_validateClientVersion_args();
  args.clientVersion = clientVersion;
  args.write(this.output);
  this.output.writeMessageEnd();
  return this.output.getTransport().flush(callback);
};

BaseServiceClient.prototype.recv_validateClientVersion = function() {
  var ret = this.input.readMessageBegin();
  var fname = ret.fname;
  var mtype = ret.mtype;
  var rseqid = ret.rseqid;
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(this.input);
    this.input.readMessageEnd();
    throw x;
  }
  var result = new BaseService_validateClientVersion_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.se) {
    throw result.se;
  }
  return;
};
BaseServiceClient.prototype.getServerTime = function(callback) {
  if (callback === undefined) {
    this.send_getServerTime();
    return this.recv_getServerTime();
  } else {
    var postData = this.send_getServerTime(true);
    return this.output.getTransport()
      .jqRequest(this, postData, arguments, this.recv_getServerTime);
  }
};

BaseServiceClient.prototype.send_getServerTime = function(callback) {
  this.output.writeMessageBegin('getServerTime', Thrift.MessageType.CALL, this.seqid);
  var args = new BaseService_getServerTime_args();
  args.write(this.output);
  this.output.writeMessageEnd();
  return this.output.getTransport().flush(callback);
};

BaseServiceClient.prototype.recv_getServerTime = function() {
  var ret = this.input.readMessageBegin();
  var fname = ret.fname;
  var mtype = ret.mtype;
  var rseqid = ret.rseqid;
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(this.input);
    this.input.readMessageEnd();
    throw x;
  }
  var result = new BaseService_getServerTime_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.success) {
    return result.success;
  }
  throw 'getServerTime failed: unknown result';
};
