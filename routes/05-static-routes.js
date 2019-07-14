var express = require('express');

module.exports = function(app, config) {
  app.use('/studentimages', express.static(config.imagesdir));
  app.use('/attachments', express.static(config.attachmentsDir));
};
