//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//


ThriftProtocol = {
  'TCOMPACT' : 0,
  'TJSON' : 1,
  'TBINARY' : 2,
  'TBINARYACCELERATED' : 3
};
Version = function(args) {
  this.major = 1;
  this.minor = 0;
  this.patch = '5a7196a8';
  this.comments = '';
  if (args) {
    if (args.major !== undefined) {
      this.major = args.major;
    }
    if (args.minor !== undefined) {
      this.minor = args.minor;
    }
    if (args.patch !== undefined) {
      this.patch = args.patch;
    }
    if (args.comments !== undefined) {
      this.comments = args.comments;
    }
  }
};
Version.prototype = {};
Version.prototype.read = function(input) {
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
        this.major = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.minor = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.patch = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.comments = input.readString().value;
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

Version.prototype.write = function(output) {
  output.writeStructBegin('Version');
  if (this.major !== null && this.major !== undefined) {
    output.writeFieldBegin('major', Thrift.Type.I32, 1);
    output.writeI32(this.major);
    output.writeFieldEnd();
  }
  if (this.minor !== null && this.minor !== undefined) {
    output.writeFieldBegin('minor', Thrift.Type.I32, 2);
    output.writeI32(this.minor);
    output.writeFieldEnd();
  }
  if (this.patch !== null && this.patch !== undefined) {
    output.writeFieldBegin('patch', Thrift.Type.STRING, 3);
    output.writeString(this.patch);
    output.writeFieldEnd();
  }
  if (this.comments !== null && this.comments !== undefined) {
    output.writeFieldBegin('comments', Thrift.Type.STRING, 4);
    output.writeString(this.comments);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

DEFAULT_CLIENT_TIMEOUT = 10000;
DEFAULT_MAX_CLIENT_TIMEOUT = 10000;
DEFAULT_ADMIN_CLIENT_TIMEOUT = 30000;
DEFAULT_CLIENT_CONN_TIMEOUT = 3000;
DEFAULT_SERVICE_ENDPOINT = 'http://sds.api.xiaomi.com';
DEFAULT_SECURE_SERVICE_ENDPOINT = 'https://sds.api.xiaomi.com';
API_ROOT_PATH = '/v1/api';
AUTH_SERVICE_PATH = '/v1/api/auth';
ADMIN_SERVICE_PATH = '/v1/api/admin';
TABLE_SERVICE_PATH = '/v1/api/table';
SCAN_COUNT = 'count';
DEFAULT_THRIFT_HEADER = 'application/x-thrift';
THRIFT_JSON_HEADER = 'application/x-thrift-json';
THRIFT_COMPACT_HEADER = 'application/x-thrift-compact';
THRIFT_BINARY_HEADER = 'application/x-thrift-binary';
THRIFT_JSON_PROTOCOL_CLASS = 'TJSONProtocol';
THRIFT_BINARY_PROTOCOL_CLASS = 'TBinaryProtocol';
THRIFT_COMPACT_PROTOCOL_CLASS = 'TCompactProtocol';
THRIFT_BINARY_PROTOCOL_ACCELERATED_CLASS = 'TBinaryProtocolAccelerated';
THRIFT_HEADER_MAP = {0 : 'application/x-thrift-compact',
1 : 'application/x-thrift-json',
2 : 'application/x-thrift-binary',
3 : 'application/x-thrift-binary'
};
HEADER_THRIFT_MAP = {'application/x-thrift-compact' : 0,
'application/x-thrift-json' : 1,
'application/x-thrift-binary' : 2,
'application/x-thrift' : 1
};
THRIFT_PROTOCOL_MAP = {0 : 'TCompactProtocol',
1 : 'TJSONProtocol',
2 : 'TBinaryProtocol',
3 : 'TBinaryProtocolAccelerated'
};
HK_REQUEST_TIMEOUT = 'X-Xiaomi-Request-Timeout';
HK_ERROR_CODE_HEADER = 'X-Xiaomi-Error-Code';
MAX_CONTENT_SIZE = 524288;
