/**
 * Google Sheets Submission Service
 * 
 * This service handles form submissions to Google Sheets via Google Apps Script Web App.
 * This is the recommended approach for client-side React apps as it avoids CORS issues
 * and doesn't require exposing API keys.
 */

import { GOOGLE_SCRIPT_URL } from '../config/googleSheets';

/**
 * Submit form data to Google Sheets
 * @param {Object} formData - The form data to submit
 * @returns {Promise} Promise that resolves with submission result
 */
export const submitToGoogleSheets = async (formData) => {
  try {
    // Check if script URL is configured
    if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL === 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE') {
      console.warn('Google Sheets URL not configured. Using mock submission.');
      // Return mock success for development
      await new Promise(resolve => setTimeout(resolve, 800)); // Simulate network delay
      return { success: true, message: 'Mock submission successful' };
    }

    // Prepare the data in the format expected by the Google Apps Script
    const payload = {
      FullName: formData.fullName || '',
      Email: formData.email || '',
      Phone: formData.phone || '',
      City: formData.city || '',
      SpaceType: formData.spaceType || '',
      ProjectStage: formData.projectStage || '',
      TotalArea: formData.totalArea || '',
      BudgetRange: formData.budgetRange || '',
      MoveInTimeline: formData.moveInTimeline || '',
      Vision: formData.vision || '',
    };

    // Make the API call to Google Apps Script
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Important: Google Apps Script doesn't support CORS properly
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    // Note: With no-cors mode, we can't read the response
    // The Google Apps Script should handle the submission and return success
    // We assume success if no error is thrown
    
    return { success: true, message: 'Form submitted successfully!' };

  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    throw new Error('Failed to submit form. Please try again or contact us directly.');
  }
};

