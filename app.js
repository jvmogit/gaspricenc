const {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer
} = window.Recharts;
const GAS_PRICES = [
  { date: "Feb 27", price: 2.399 },
  { date: "Mar 6", price: 2.899 },
  { date: "Mar 7", price: 2.959 },
  { date: "Mar 8", price: 2.999 },
  { date: "Mar 10", price: 3.099 },
  { date: "Mar 11", price: 3.159 },
  { date: "Mar 12", price: 3.199 },
  { date: "Mar 13", price: 3.249 },
  { date: "Mar 15", price: 3.399 },
  { date: "Mar 16", price: 3.439 },
  { date: "Mar 18", price: 3.479 },
  { date: "Mar 19", price: 3.549 },
  { date: "Mar 22", price: 3.599 },
  { date: "Mar 29", price: 3.549 },
  { date: "Apr 01", price: 3.699 },
  { date: "Apr 02", price: 3.779 },
  { date: "Apr 08", price: 3.729 },
  { date: "Apr 09", price: 3.699 },
  { date: "Apr 12", price: 3.689 },
  { date: "Apr 14", price: 3.679 },
  { date: "Apr 15", price: 3.649 },
  { date: "Apr 16", price: 3.629 },
  { date: "Apr 17", price: 3.599 },
  { date: "Apr 20", price: 3.579 },
  { date: "Apr 21", price: 3.559 },
  { date: "Apr 22", price: 3.539 },
  { date: "Apr 26", price: 3.599 },
  { date: "Apr 28", price: 3.659 },
  { date: "Apr 29", price: 3.799 },
  { date: "May 2", price: 3.859 },
  { date: "May 3", price: 3.899 },
  { date: "May 5", price: 3.999 },
  { date: "May 6", price: 4.099 },
  { date: "May 7", price: 4.199 },
  { date: "May 8", price: 4.129 },
  { date: "May 9", price: 4.099 },
  { date: "May 11", price: 4.039 },
  { date: "May 13", price: 3.999 },
  { date: "May 16", price: 3.979 },
  { date: "May 17", price: 3.999 },
  { date: "May 19", price: 3.959 },
  { date: "May 22", price: 3.919 },
  { date: "May 27", price: 3.899 },
  { date: "May 28", price: 3.859 },
  { date: "May 29", price: 3.799 },
  { date: "May 30", price: 3.759 },
  { date: "June 02", price: 3.699 },
  { date: "June 05", price: 3.659 },
  { date: "June 08", price: 3.599 },
  { date: "June 11", price: 3.579 },
  { date: "June 12", price: 3.479 },
  { date: "June 13", price: 3.499 },
  { date: "June 15", price: 3.399 },
  { date: "June 20", price: 3.359 }
];
const BASE = GAS_PRICES[0];
const LATEST = GAS_PRICES[GAS_PRICES.length - 1];
const INCREASE = (LATEST.price - BASE.price).toFixed(3);
const PCT = ((LATEST.price - BASE.price) / BASE.price * 100).toFixed(1);
const DATE_RANGE = `${BASE.date} \u2013 ${LATEST.date}, 2026`;
const Y_MAX = Math.ceil(Math.max(...GAS_PRICES.map((d) => d.price)) * 10) / 10 + 0.2;
const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  const val = payload[0].value;
  const diff = (val - BASE.price).toFixed(3);
  const pct = ((val - BASE.price) / BASE.price * 100).toFixed(1);
  return /* @__PURE__ */ React.createElement("div", { style: {
    background: "#1e293b",
    border: "1px solid #334155",
    borderRadius: 8,
    padding: "10px 14px"
  } }, /* @__PURE__ */ React.createElement("p", { style: { color: "#94a3b8", margin: 0, fontSize: 13 } }, label, label === LATEST.date ? " (latest)" : ""), /* @__PURE__ */ React.createElement("p", { style: { color: "#f97316", margin: "4px 0 0", fontSize: 18, fontWeight: 700 } }, "$", val.toFixed(3)), val !== BASE.price && /* @__PURE__ */ React.createElement("p", { style: { color: "#ef4444", margin: "2px 0 0", fontSize: 12 } }, "+$", diff, " (+", pct, "%) vs ", BASE.date));
};
const CustomDot = ({ cx, cy, payload }) => /* @__PURE__ */ React.createElement(
  "circle",
  {
    cx,
    cy,
    r: payload.date === LATEST.date ? 7 : 5,
    fill: payload.date === LATEST.date ? "#facc15" : "#f97316"
  }
);
function GasPriceChart() {
  return /* @__PURE__ */ React.createElement("div", { style: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "32px 16px"
  } }, /* @__PURE__ */ React.createElement("div", { style: { width: "100%", maxWidth: 720 } }, /* @__PURE__ */ React.createElement("h2", { style: { color: "#f1f5f9", fontSize: 20, fontWeight: 700, marginBottom: 4 } }, "Costco Matthews \u2014 Regular Gas Price"), /* @__PURE__ */ React.createElement("p", { style: { color: "#64748b", fontSize: 13, marginBottom: 32 } }, "$/gallon \xB7 ", DATE_RANGE, " \xB7 Costco #367, Matthews NC"), /* @__PURE__ */ React.createElement(ResponsiveContainer, { width: "100%", height: 340 }, /* @__PURE__ */ React.createElement(LineChart, { data: GAS_PRICES, margin: { top: 10, right: 20, left: 10, bottom: 10 } }, /* @__PURE__ */ React.createElement(CartesianGrid, { strokeDasharray: "3 3", stroke: "#1e293b" }), /* @__PURE__ */ React.createElement(
    XAxis,
    {
      dataKey: "date",
      tick: { fill: "#94a3b8", fontSize: 13 },
      axisLine: { stroke: "#334155" },
      tickLine: false
    }
  ), /* @__PURE__ */ React.createElement(
    YAxis,
    {
      domain: [2.2, Y_MAX],
      tickFormatter: (v) => `$${v.toFixed(2)}`,
      tick: { fill: "#94a3b8", fontSize: 13 },
      axisLine: { stroke: "#334155" },
      tickLine: false,
      width: 60
    }
  ), /* @__PURE__ */ React.createElement(Tooltip, { content: /* @__PURE__ */ React.createElement(CustomTooltip, null) }), /* @__PURE__ */ React.createElement(
    ReferenceLine,
    {
      x: BASE.date,
      stroke: "#ef4444",
      strokeDasharray: "4 3",
      label: {
        value: "War starts Feb 28",
        position: "insideTopRight",
        fill: "#ef4444",
        fontSize: 11,
        dy: -6
      }
    }
  ), /* @__PURE__ */ React.createElement(
    Line,
    {
      type: "monotone",
      dataKey: "price",
      stroke: "#f97316",
      strokeWidth: 2.5,
      dot: /* @__PURE__ */ React.createElement(CustomDot, null),
      activeDot: { r: 7, fill: "#fb923c" }
    }
  ))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 24, marginTop: 28, flexWrap: "wrap" } }, [
    { label: `Pre-war (${BASE.date})`, value: `$${BASE.price.toFixed(3)}` },
    { label: `Latest (${LATEST.date})`, value: `$${LATEST.price.toFixed(3)}` },
    { label: "Increase", value: `+$${INCREASE}` },
    { label: "% Change", value: `+${PCT}%` }
  ].map(({ label, value }) => /* @__PURE__ */ React.createElement("div", { key: label, style: {
    background: "#1e293b",
    borderRadius: 8,
    padding: "12px 18px",
    flex: "1 1 140px"
  } }, /* @__PURE__ */ React.createElement("p", { style: {
    color: "#64748b",
    fontSize: 11,
    margin: 0,
    textTransform: "uppercase",
    letterSpacing: "0.05em"
  } }, label), /* @__PURE__ */ React.createElement("p", { style: {
    color: "#f1f5f9",
    fontSize: 20,
    fontWeight: 700,
    margin: "4px 0 0"
  } }, value)))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 16, marginTop: 12, alignItems: "center" } }, /* @__PURE__ */ React.createElement("span", { style: { color: "#f97316", fontSize: 12 } }, "\u25CF Data points"), /* @__PURE__ */ React.createElement("span", { style: { color: "#facc15", fontSize: 12 } }, "\u25CF Latest (", LATEST.date, ")")), /* @__PURE__ */ React.createElement("p", { style: { color: "#475569", fontSize: 11, marginTop: 12, textAlign: "center" } }, "Sources: Costco receipt (Feb 27) \xB7 Costco Warehouse Tools app screenshots")));
}
window.ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ React.createElement(GasPriceChart, null));
