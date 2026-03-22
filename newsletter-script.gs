/**
 * bjunjo.com 뉴스레터 구독자 수집 스크립트
 * Google Apps Script 웹앱으로 배포하면
 * 사이트 폼에서 이메일을 받아 Google Sheets에 자동 저장합니다.
 *
 * 배포 방법:
 * 1. script.google.com 에서 새 프로젝트 생성
 * 2. 이 코드 전체 붙여넣기
 * 3. 배포 → 새 배포 → 웹앱 선택
 * 4. 실행 계정: 나 / 액세스: 모든 사용자
 * 5. 배포 후 URL을 복사해서 index.html의 SCRIPT_URL에 붙여넣기
 */

const SHEET_NAME = "구독자";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const email = data.email ? data.email.trim().toLowerCase() : "";

    if (!email || !isValidEmail(email)) {
      return jsonResponse({ success: false, message: "유효하지 않은 이메일입니다." });
    }

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);

    // 시트가 없으면 생성
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow(["이메일", "구독일", "출처"]);
      sheet.getRange(1, 1, 1, 3).setFontWeight("bold");
    }

    // 중복 체크
    const emails = sheet.getRange(2, 1, Math.max(sheet.getLastRow() - 1, 1), 1).getValues().flat();
    if (emails.includes(email)) {
      return jsonResponse({ success: true, message: "already_subscribed" });
    }

    // 저장
    const now = new Date();
    const dateStr = Utilities.formatDate(now, "Asia/Seoul", "yyyy-MM-dd HH:mm");
    sheet.appendRow([email, dateStr, "bjunjo.com"]);

    return jsonResponse({ success: true, message: "subscribed" });

  } catch (err) {
    return jsonResponse({ success: false, message: err.toString() });
  }
}

function doGet(e) {
  // CORS preflight 대응
  return jsonResponse({ status: "ok" });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function jsonResponse(obj) {
  const output = ContentService.createTextOutput(JSON.stringify(obj));
  output.setMimeType(ContentService.MimeType.JSON);
  return output;
}
