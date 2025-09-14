const dispatchDB = {
  WS: {
    "0047": {
      region: "Western Slope",
      reason: "Sunflowers spotted via Street View. Emotional safety confirmed.",
      date_sent: "2025-09-10"
    }
  },
  SJ: {},
  PNW: {},
  EC: {}
};

function searchDispatch(serial) {
  const [regionCode, number] = serial.split("-");
  const region = dispatchDB[regionCode];
  if (region && region[number]) {
    alert(`Region: ${region[number].region}\nReason: ${region[number].reason}\nDate Sent: ${region[number].date_sent}`);
  } else {
    alert("This dispatch hasn’t been sent yet. But it’s waiting for the right moment.");
  }
}
