import React, { useEffect, useRef } from "react";
import BackButton from "../components/BackButton";
import Plotly from "plotly.js-dist-min";
import { Chart, registerables } from "chart.js";
import * as d3 from "d3";

// Register all Chart.js components (scales, elements, controllers, etc.)
Chart.register(...registerables);

const GraphicsPage = () => {
  const plotlyRef = useRef(null);
  const chartJsRef = useRef(null);
  const d3Ref = useRef(null);
  const googleRef = useRef(null);

  useEffect(() => {
    // Plotly.js example (Donut Pie)
    if (plotlyRef.current) {
      const labels = ["Italy", "France", "Spain", "USA", "Argentina"];
      const values = [55, 49, 44, 24, 15];
      const data = [{ labels, values, hole: 0.4, type: "pie" }];
      const layout = { title: "World Wide Wine Production (Donut Pie)" };
      Plotly.newPlot(plotlyRef.current, data, layout, { responsive: true });
    }

    // Chart.js example (Multi-series Line)
    let chartInstance = null;
    if (chartJsRef.current) {
      const ctx = chartJsRef.current.getContext("2d");
      chartInstance = new Chart(ctx, {
        type: "line",
        data: {
          labels: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
          datasets: [
            {
              label: "Series A",
              data: [860, 1140, 1060, 1060, 1070, 1110, 1330, 2210, 7830, 2478],
              borderColor: "red",
              pointRadius: 2,
              tension: 0.4,
              fill: false,
            },
            {
              label: "Series B",
              data: [
                1600, 1700, 1700, 1900, 2000, 2700, 4000, 5000, 6000, 7000,
              ],
              borderColor: "green",
              pointRadius: 2,
              tension: 0.4,
              fill: false,
            },
            {
              label: "Series C",
              data: [300, 700, 2000, 5000, 6000, 4000, 2000, 1000, 200, 100],
              borderColor: "blue",
              pointRadius: 2,
              tension: 0.4,
              fill: false,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: { beginAtZero: false },
          },
          plugins: { legend: { display: false } },
        },
      });
    }

    // D3.js example (Scatter Plot with axes)
    let d3Cleanup = () => {};
    if (d3Ref.current) {
      // Clear any previous render to avoid duplicate charts (e.g., HMR or re-entries)
      d3.select(d3Ref.current).selectAll("*").remove();
      const xSize = 500;
      const ySize = 500;
      const margin = 40;
      const xMax = xSize - margin * 2;
      const yMax = ySize - margin * 2;

      // Generate random points
      const numPoints = 100;
      const data = Array.from({ length: numPoints }, () => [
        Math.random() * xMax,
        Math.random() * yMax,
      ]);

      // Root svg
      const root = d3
        .select(d3Ref.current)
        .append("svg")
        .attr("width", xSize)
        .attr("height", ySize);

      const svg = root
        .append("g")
        .attr("transform", `translate(${margin},${margin})`);

      // Scales
      const x = d3.scaleLinear().domain([0, 500]).range([0, xMax]);
      const y = d3.scaleLinear().domain([0, 500]).range([yMax, 0]);

      // Axes
      svg
        .append("g")
        .attr("transform", `translate(0,${yMax})`)
        .call(d3.axisBottom(x));

      svg.append("g").call(d3.axisLeft(y));

      // Dots
      svg
        .append("g")
        .selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", (d) => d[0])
        .attr("cy", (d) => d[1])
        .attr("r", 3)
        .style("fill", "red");

      d3Cleanup = () => {
        d3.select(d3Ref.current).selectAll("*").remove();
      };
    }

    // Google Charts example (3D Pie)
    let googleChartDrawn = false;
    const loadGoogleCharts = () => {
      if (!window.google || !window.google.charts) {
        const script = document.createElement("script");
        script.src = "https://www.gstatic.com/charts/loader.js";
        script.async = true;
        script.onload = () => {
          window.google.charts.load("current", { packages: ["corechart"] });
          window.google.charts.setOnLoadCallback(drawGoogleChart);
        };
        document.body.appendChild(script);
      } else {
        window.google.charts.load("current", { packages: ["corechart"] });
        window.google.charts.setOnLoadCallback(drawGoogleChart);
      }
    };

    const drawGoogleChart = () => {
      if (!googleRef.current || googleChartDrawn) return;
      const data = window.google.visualization.arrayToDataTable([
        ["Contry", "Mhl"],
        ["Italy", 54.8],
        ["France", 48.6],
        ["Spain", 44.4],
        ["USA", 23.9],
        ["Argentina", 14.5],
      ]);

      const options = { title: "World Wide Wine Production", is3D: true };
      const chart = new window.google.visualization.PieChart(googleRef.current);
      chart.draw(data, options);
      googleChartDrawn = true;
    };

    loadGoogleCharts();

    // Cleanup on unmount
    return () => {
      if (plotlyRef.current) {
        Plotly.purge(plotlyRef.current);
      }
      if (chartInstance) {
        chartInstance.destroy();
      }
      d3Cleanup();
      if (googleRef.current) {
        // Clear Google chart container
        googleRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="conditions-container">
      <h1>Graphics Demo</h1>
      <p className="conditions-helper">
        Plotly Donut, Chart.js Line, D3 Scatter, Google 3D Pie.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px" }}>
        <section>
          <h3>Plotly.js (Donut Pie)</h3>
          <div ref={plotlyRef} style={{ width: "100%", minHeight: 300 }} />
        </section>

        <section style={{ minHeight: 320 }}>
          <h3>Chart.js (Multi-Line)</h3>
          <div style={{ position: "relative", width: "100%", height: 280 }}>
            <canvas ref={chartJsRef} />
          </div>
        </section>

        <section>
          <h3>D3.js (Scatter Plot)</h3>
          <div ref={d3Ref} style={{ width: "100%", minHeight: 520 }} />
        </section>

        <section>
          <h3>Google Charts (3D Pie)</h3>
          <div ref={googleRef} style={{ width: "100%", minHeight: 300 }} />
        </section>
      </div>

      <BackButton />
    </div>
  );
};

export default GraphicsPage;
