import exampleRoute from './server/routes/example';

export default function (kibana) {
  return new kibana.Plugin({
    //require: ['elasticsearch'],

    uiExports: {    
      visTypes: [
        'plugins/kibana_iframe_communicator_plugin/hack'
      ]
    }/*,

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },

    init(server, options) {
      // Add server routes and initalize the plugin here
      exampleRoute(server);
    }*/

  });
};
