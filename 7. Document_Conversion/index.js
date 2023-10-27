window.onload = pageReady;

function pageReady(){
    function convertLength(unitChanged) {
        const meters = document.getElementById("meters");
        const centimeters = document.getElementById("centimeters");
        const millimeters = document.getElementById("millimeters");

        const value = parseFloat(document.getElementById(unitChanged).value);

        if (isNaN(value)) {
          return;
        }

        switch (unitChanged) {
          case "meters":
            centimeters.value = (value * 100).toFixed(2);
            millimeters.value = (value * 1000).toFixed(1);
            break;
          case "centimeters":
            meters.value = (value / 100).toFixed(3);
            millimeters.value = (value * 10).toFixed(1);
            break;
          case "millimeters":
            meters.value = (value / 1000).toFixed(3);
            centimeters.value = (value / 10).toFixed(2);
            break;
        }
      }
}
