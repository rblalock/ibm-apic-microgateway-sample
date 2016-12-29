process.env.CONFIG_DIR = __dirname + '/config';
process.env.POLICY_DIR = __dirname + '/policies';

require('microgateway');
