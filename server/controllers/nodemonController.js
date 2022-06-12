class Nodemon {

  async clear(_req, res) {
    var lines = process.stdout.getWindowSize()[1];
    for (var i = 0; i < lines; i++) {
      console.log('\r\n');
    }
    res.status(200).json({ message: 'Screen Cleared!' })

  }
}

module.exports = new Nodemon
