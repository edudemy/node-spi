console.log("Starting");
var spi = require('./build/Release/_spi');
console.log(spi);
var x = new spi._spi("/dev/spidev1.1");
console.log("Created spi");
console.log(x.mode());
x.mode(spi.SPI_MODE_3);
console.log(x.mode());
x.mode(spi.SPI_MODE_0);
x.chip_select(spi.SPI_CS_HIGH);
console.log(x.mode());
x.chip_select(spi.SPI_NO_CS);
console.log(x.mode());
x.chip_select(0);
console.log(x.mode());
console.log(x.open());
console.log(x.close());
