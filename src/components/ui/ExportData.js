import classes from './styles/ExportData.module.css';

function ExportData(props) {
    const exportData = () => {
        const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
          JSON.stringify(props.data)
        )}`;
        const link = document.createElement("a");
        link.href = jsonString;
        link.download = "data.json";
    
        link.click();
      };

      return (
            <div className={classes.actions}>
                <button type="button" onClick={exportData}>
                    Download
                </button>
            </div>
      );
}

export default ExportData;