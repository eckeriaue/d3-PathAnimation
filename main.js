import * as D3 from 'd3'

const points = [
  [0, 80],
  [100, 100],
  [200, 30],
  [300, 50],
  [400, 40],
  [500, 80],
  [600, 30],
  [700, 50],
  [800, 40],
  [900, 80],
]
D3.select("body")
  .transition()
  .duration(1750)
  .style("background-color", "aliceblue")

const app = D3.select('#app')
const lineGenerator = D3.line().curve(D3.curveCardinal)

const pathData = lineGenerator(points)

// function setDValue(arr) {
//   this.attr('d', lineGenerator(arr))
// }

const path = app.append('svg')
  .attr('style','width: 100%')
  .append('path')
  .attr('fill', 'none')
  .attr('stroke', 'blue')
  .attr('d', lineGenerator(points.map(p => [0, 100])) )
  .transition()
  .duration(500)
  .attr('d', lineGenerator(points.map(p => [p[0], 100])) )
  .transition()
  .duration(1000)
  .attr('d', pathData)

