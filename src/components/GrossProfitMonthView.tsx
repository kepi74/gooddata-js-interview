import React from "react";
import { ColumnChart } from "@gooddata/react-components";
import MonthSelect from "./MonthSelect";
import { VisualizationObject } from "@gooddata/typings";

export interface GrossProfitMonthViewProps {
  measures: VisualizationObject.BucketItem[];
  filter: VisualizationObject.VisualizationObjectFilter;
  projectId: string;
  dispatchMonthChange: (month: string) => void;
}

const GrossProfitMonthView: React.FC<GrossProfitMonthViewProps> = ({
  measures,
  filter,
  projectId,
  dispatchMonthChange
}) => (
  <>
    <h1>
      $ Gross Profit in month{" "}
      {<MonthSelect dispatchMonthChange={dispatchMonthChange} />} 2016
    </h1>
    <div>
      <ColumnChart
        measures={measures}
        filters={[filter]}
        projectId={projectId}
      />
    </div>
  </>
);

export default GrossProfitMonthView;
