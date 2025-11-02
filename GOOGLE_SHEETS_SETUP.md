# Google Sheets Integration Setup Guide

This guide will help you set up Google Sheets integration for the Einri Living consultation form.

## Prerequisites

- A Google account
- Access to Google Sheets
- Basic knowledge of Google Apps Script

## Step 1: Create Your Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Einri Living Consultation Form Responses" (or any name you prefer)
4. Name the first sheet tab "Form Responses"
5. Add these column headers in row 1:
   - Full Name
   - Email Address
   - Phone Number
   - City / Location
   - Type of Space
   - Project Stage
   - Total Area (sq.ft)
   - Budget Range
   - Move-in Timeline
   - Your Vision
   - Timestamp

6. Select row 1 and make it bold (this makes it clear they're headers)
7. Optionally, freeze row 1 for easy viewing

## Step 2: Set Up Google Apps Script

1. In your Google Sheet, go to **Extensions > Apps Script**
2. Delete the default `function myFunction()` code
3. Copy the entire contents of `googleAppsScript.js` from this project
4. Paste it into the Apps Script editor

## Step 3: Configure the Script

1. In the script, find these lines and update them:
   ```javascript
   const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE';
   const SHEET_NAME = 'Form Responses';
   ```

2. To get your SPREADSHEET_ID:
   - Look at the URL of your Google Sheet
   - It will be in the format: `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit`
   - Copy the ID part (the long string between `/d/` and `/edit`)

3. Update SHEET_NAME to match your sheet tab name exactly

## Step 4: Deploy the Script as a Web App

1. In the Apps Script editor, click **"Deploy"** button at the top right
2. Select **"New Deployment"**
3. Click the gear icon (⚙️) next to "Select type" and choose **"Web app"**
4. Configure the deployment:
   - **Description:** "Einri Living Form Handler"
   - **Execute as:** "Me" (your Google account)
   - **Who has access:** "Anyone" (this allows your website to submit data)
5. Click **"Deploy"**
6. You'll be prompted to authorize the script:
   - Click "Authorize access"
   - Choose your Google account
   - Click "Advanced" > "Go to [project name] (unsafe)" (this is required for the first time)
   - Click "Allow"
7. Copy the **Web App URL** that appears in the deployment window
   - It will look like: `https://script.google.com/macros/s/AKfycb...`

## Step 5: Update the Configuration

1. Open `src/config/googleSheets.js` in your project
2. Replace this line:
   ```javascript
   export const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
   ```
   with:
   ```javascript
   export const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_ACTUAL_URL';
   ```
   (Use the URL you copied in Step 4)

## Step 6: Test the Integration

1. Run your React app with `npm start`
2. Fill out the consultation form
3. Submit it
4. Check your Google Sheet - you should see a new row with your data!

## Troubleshooting

### Issue: "Script URL not configured" message appears
- Make sure you've updated `GOOGLE_SCRIPT_URL` in `src/config/googleSheets.js`
- The URL should start with `https://script.google.com/`

### Issue: Data not appearing in the sheet
- Check the browser console for error messages
- Verify the SPREADSHEET_ID is correct in the Apps Script
- Verify the SHEET_NAME matches your sheet tab name exactly
- Make sure you deployed the script as "Web app" (not just "Container-bound")
- Check that "Who has access" is set to "Anyone"

### Issue: CORS errors
- The script uses `no-cors` mode which is correct for Google Apps Script
- If you still see CORS errors, try redeploying the script

### Issue: Form shows "Submitting..." forever
- Check the browser console for errors
- Make sure the Google Apps Script deployed successfully
- Try testing the script URL directly in a browser - you should see a JSON response

## Security Notes

- The Web App URL is public, but:
  - Only authorized executions can add data
  - The "Anyone" setting allows your website to POST data to it
  - Consider adding form validation or spam protection in the future

## Optional: Test the Script

You can test the script in the Apps Script editor:
1. Select the `testScript` function from the dropdown
2. Click the play button (▶)
3. Check the logs (View > Logs) for any errors

## Support

If you need help:
1. Check the Google Apps Script logs in the script editor
2. Check your browser's developer console
3. Verify all configuration steps were completed correctly

---

**Next Steps:**
- Once basic functionality works, you can add email notifications
- Add data validation in the script
- Format the sheet for better readability
- Set up automatic backups

