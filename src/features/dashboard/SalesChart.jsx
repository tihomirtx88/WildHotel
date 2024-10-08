import styled from "styled-components";
import DashboardBox from "./DashboardBox";
import Heading from "../../ui/Heading";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useDarkMode } from "../../context/DarkModeContext";
import { eachDayOfInterval, format, isSameDay, subDays } from "date-fns";

const StyledSalesChart = styled(DashboardBox)`
  grid-column: 1 / -1;

  /* Hack to change grid line colors */
  & .recharts-cartesian-grid-horizontal line,
  & .recharts-cartesian-grid-vertical line {
    stroke: var(--color-grey-300);
  }

  @media (max-width: 680px) {
    overflow-x: auto;
  }
`;

const ScrollableContainer = styled.div`
  width: 100%;
  min-width: 768px; /* This ensures the chart maintains a minimum width */
  
  @media (max-width: 660px) {
    width: 100%;
    overflow-x: auto;
  }
`;

export default function SalesChart({ bookings, numDays }) {
  const { isDarkMode } = useDarkMode();

  // Take all days
  const allDates = eachDayOfInterval({
    start: subDays(new Date(), numDays - 1),
    end: new Date(),
  });

  //Map all days with booking in this days  witch total and extra price
  const data = allDates.map((date) => {
    return {
      label: format(date, "MMM dd"),
      totalSales: bookings
        .filter((booking) => isSameDay(date, new Date(booking.created_at)))
        .reduce((acc, curr) => acc + curr.totalPrice, 0),
      extrasSales: bookings
        .filter((booking) => isSameDay(date, new Date(booking.created_at)))
        .reduce((acc, curr) => acc + curr.extrasPrice, 0),
    };
  });

  //Set colors for chart depend of dark mode and light mode
  const colors = isDarkMode
    ? {
        totalSales: { stroke: "#4f46e5", fill: "#4f46e5" },
        extrasSales: { stroke: "#22c55e", fill: "#22c55e" },
        text: "#e5e7eb",
        background: "#18212f",
      }
    : {
        totalSales: { stroke: "#4f46e5", fill: "#c7d2fe" },
        extrasSales: { stroke: "#16a34a", fill: "#dcfce7" },
        text: "#374151",
        background: "#fff",
      };

  return (
    <StyledSalesChart className="sales-chart-container">
      <Heading as="h2">
        Sales From {format(allDates.at(0), "MMM dd yyyy")} &mdash;{" "}
        {format(allDates.at(-1), "MMM dd yyyy")}
      </Heading>

      <ScrollableContainer>
        <ResponsiveContainer height={300} width="100%">
          <AreaChart data={data}>
            <XAxis
              dataKey="label"
              tick={{ fill: colors.text }}
              tickLine={{ stroke: colors.text }}
            />
            <YAxis
              unit="$"
              tick={{ fill: colors.text }}
              tickLine={{ stroke: colors.text }}
            />
            <CartesianGrid strokeDasharray="4" />
            <Tooltip contentStyle={{ backgroundColor: colors.background }} />
            <Area
              dataKey="totalSales"
              type="monotone"
              stroke={colors.totalSales.stroke}
              fill={colors.totalSales.fill}
              strokeWidth={2}
              name="Total Sales"
              unit="$"
            />
            <Area
              dataKey="extrasSales"
              type="monotone"
              stroke={colors.extrasSales.stroke}
              fill={colors.extrasSales.fill}
              strokeWidth={2}
              name="extrasSales Sales"
              unit="$"
            />
          </AreaChart>
        </ResponsiveContainer>
      </ScrollableContainer>
    </StyledSalesChart>
  );
}
