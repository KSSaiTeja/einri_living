/**
 * Google Apps Script for Einri Living Consultation Form
 * 
 * INSTRUCTIONS:
 * 1. Open your Google Sheet
 * 2. Go to Extensions > Apps Script
 * 3. Delete the default code and paste this entire file
 * 4. Update the SPREADSHEET_ID variable with your sheet's ID
 * 5. Update the SHEET_NAME variable with your sheet's tab name
 * 6. Save the script
 * 7. Deploy it as a Web App:
 *    - Click "Deploy" > "New Deployment"
 *    - Choose "Web app" as the type
 *    - Set "Execute as" to "Me"
 *    - Set "Who has access" to "Anyone"
 *    - Click "Deploy"
 *    - Copy the Web App URL and use it in src/config/googleSheets.js
 * 
 * SHEET STRUCTURE:
 * Your Google Sheet should have these columns in row 1:
 * - Full Name
 * - Email Address
 * - Phone Number
 * - City / Location
 * - Type of Space
 * - Project Stage
 * - Total Area (sq.ft)
 * - Budget Range
 * - Move-in Timeline
 * - Your Vision
 * - Timestamp
 */

// CONFIGURATION - UPDATE THESE VALUES
const SPREADSHEET_ID = '1nkaVooh6s7iCFJBduQ9ZFdkCo3Ke14Mj45uMTQnMmKw'; // Replace with your Google Sheet ID
const SHEET_NAME = 'Form Responses'; // Replace with your sheet tab name

/**
 * Helper function to format timestamp in IST
 */
function formatTimestampIST() {
  const now = new Date();
  
  // Format date in IST (Asia/Kolkata) timezone
  const istDate = Utilities.formatDate(now, 'Asia/Kolkata', 'dd/MM/yyyy HH:mm:ss');
  
  // Add 'IST' suffix
  return istDate + ' IST';
}

/**
 * doPost function - receives POST requests from your React app
 */
function doPost(e) {
  try {
    // Get the spreadsheet
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    // If sheet doesn't exist, create it
    if (!sheet) {
      const newSheet = spreadsheet.insertSheet(SHEET_NAME);
      // Add headers
      const headers = [
        'Full Name',
        'Email Address',
        'Phone Number',
        'City / Location',
        'Type of Space',
        'Project Stage',
        'Total Area (sq.ft)',
        'Budget Range',
        'Move-in Timeline',
        'Your Vision',
        'Timestamp'
      ];
      newSheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      newSheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        message: 'Sheet created. Please try submitting again.'
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Parse the incoming data
    const formData = JSON.parse(e.postData.contents);
    
    // Prepare the row data
    const rowData = [
      formData.FullName || '',
      formData.Email || '',
      formData.Phone || '',
      formData.City || '',
      formData.SpaceType || '',
      formData.ProjectStage || '',
      formData.TotalArea || '',
      formData.BudgetRange || '',
      formData.MoveInTimeline || '',
      formData.Vision || '',
      formatTimestampIST() // Formatted IST timestamp
    ];
    
    // Add the data to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Data successfully added to Google Sheet'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: 'Error: ' + error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * doGet function - for testing purposes
 */
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    success: true,
    message: 'Google Apps Script is working correctly'
  })).setMimeType(ContentService.MimeType.JSON);
}

/**
 * Test function to verify setup
 */
function testScript() {
  Logger.log('Script is working correctly');
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = spreadsheet.getSheetByName(SHEET_NAME);
  
  if (sheet) {
    Logger.log('Sheet found: ' + sheet.getName());
    Logger.log('Total rows: ' + sheet.getLastRow());
  } else {
    Logger.log('Sheet not found, will be created on first submission');
  }
}

