Page({
  data: {
    markers: [{
      // iconPath: "/resources/others.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50,
      callout: {
        content: 'testtesttesttesttest',
        color: 'black',
        bgColor: 'white',
        padding: 15,
        display: "ALWAYS",
        borderRadius: 3
      }
    }]
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e)
  },
  controltap(e) {
    console.log(e.controlId)
  }
})