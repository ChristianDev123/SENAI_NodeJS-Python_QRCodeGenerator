from config_tratament import Config_Tratament as ct
from openpyxl import Workbook, load_workbook
from json_tratament import JSON_Tratament as jt

class Excel_Tratament:
    def main(self):
        objectConfig = ct.configsObject(None)
        excelSheet = Excel_Tratament.__getExcelFile(None ,objectConfig['file_name'])
        columnReference = Excel_Tratament.__getColumnReference(None, excelSheet, objectConfig["column_codes"])
        allCodes = Excel_Tratament.__getRowsData(None, excelSheet, columnReference)
        return jt.createJSON(None, allCodes)

    def __getColumnReference(self, sheet, columnCodes):
        index = 0
        while True:
            letterColumn = chr(66-index)
            columnName = f"{letterColumn}1"
            if(sheet[columnName].value == columnCodes):
                return columnName 
            index += 1

    def __getRowsData(self, sheet, columnReference):
        arrCodes = []
        index = 2
        while True:
            rowData = sheet[f"{columnReference[0:len(columnReference)-1]}{index}"] 
            if( rowData.value == None): return arrCodes
            arrCodes.append(rowData.value)
            index += 1

    def __getExcelFile(self, fileName):
        wb = load_workbook(fileName)
        return wb.active

Excel_Tratament.main(None)