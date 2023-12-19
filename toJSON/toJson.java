
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;



public class toJson {

    public static void main(String[] args) {
        String csvFilePath = "/Users/alisa/Desktop/PittNAIL/clEARdashboard/toJSON/DeviceInfoTest.csv";
        String jsonFilePath = "/Users/alisa/Desktop/PittNAIL/clEARdashboard/toJSON/DeviceInfo.json";

        try {
            List<Map<String, String>> csvData = readCsv(csvFilePath);
            writeJson(csvData, jsonFilePath);
            System.out.println("CSV to JSON conversion successful!");
        } catch (IOException e) {
            System.err.println("Error: " + e.getMessage());
        }
    }

    public static List<Map<String, String>> readCsv(String csvFilePath) throws IOException {
        List<Map<String, String>> csvData = new ArrayList<>();

        try (BufferedReader br = new BufferedReader(new FileReader(csvFilePath))) {
            String headerLine = br.readLine();
             headerLine = br.readLine();
            String[] headers = headerLine.split(",");
            String line;

            while ((line = br.readLine()) != null) {
                String[] values = line.split(",");
                Map<String, String> rowData = new LinkedHashMap<>();

                for (int i = 0; i < headers.length; i++) {
                    if (i < values.length) {
                        rowData.put(headers[i], values[i]);
                    }
                }

                csvData.add(rowData);
            }
        }

        return csvData;
    }

    public static void writeJson(List<Map<String, String>> data, String jsonFilePath) throws IOException {
        try (FileWriter fileWriter = new FileWriter(jsonFilePath)) {
            fileWriter.write("[");
            boolean isFirst = true;

            for (Map<String, String> row : data) {
                if (!isFirst) {
                    fileWriter.write(",");
                }

                fileWriter.write("\n");
                fileWriter.write(mapToJsonString(row));
                isFirst = false;
            }

            fileWriter.write("\n]");
        }
    }

    public static String mapToJsonString(Map<String, String> map) {
        StringBuilder sb = new StringBuilder();
        sb.append("{");
        boolean isFirst = true;

        for (Map.Entry<String, String> entry : map.entrySet()) {
            if (!isFirst) {
                sb.append(",");
            }
            String value = entry.getValue();
            /*if (value.contains("\"\""))
            {
                value = value.replace("\"\"", "\""); 
            }*/
            sb.append("\"").append(entry.getKey()).append("\":\"").append(entry.getValue()).append("\"");
            isFirst = false;
        }

        sb.append("}");
        return sb.toString();
    }
}
