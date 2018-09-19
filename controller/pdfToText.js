var pdfText = require('pdf-text');


exports.get= function(req,res)
{
  var pathToPdf ="./ciao.pdf"
  pdfText(pathToPdf, function(err, chunks) {
  chunks.map((str)=>res.send(str))
  res.end();
  })
};
