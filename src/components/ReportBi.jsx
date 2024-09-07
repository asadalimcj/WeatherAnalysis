import React from "react";

function ReportBi() {
  return (
    <div className="w-10 p-5 powerbi">
      <iframe
        title="history"
        width="1120"
        height="680"
        src="https://app.powerbi.com/reportEmbed?reportId=47b31db9-f03f-4581-bacf-3cfc4822ba1c&autoAuth=true&ctid=f37912b3-7138-4376-8cb7-1a0329c14c48"
        frameborder="0"
        allowFullScreen="true"
      ></iframe>
    </div>
  );
}

export default ReportBi;
