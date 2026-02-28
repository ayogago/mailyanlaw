import { NextResponse } from "next/server";

// Refresh a long-lived Instagram token (must be done before it expires — every 60 days)
// Call this endpoint periodically (e.g., via cron job) to keep the token alive.
// GET /api/instagram/refresh-token
export async function GET() {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!accessToken) {
    return NextResponse.json(
      { error: "No INSTAGRAM_ACCESS_TOKEN configured" },
      { status: 400 }
    );
  }

  try {
    const url = `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${accessToken}`;
    const response = await fetch(url);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("[Instagram Token Refresh] Error:", response.status, errorText);
      return NextResponse.json(
        { error: "Failed to refresh token", details: errorText },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log("[Instagram Token Refresh] Token refreshed successfully. Expires in:", data.expires_in, "seconds");

    return NextResponse.json({
      success: true,
      token_type: data.token_type,
      expires_in_seconds: data.expires_in,
      expires_in_days: Math.floor(data.expires_in / 86400),
      message:
        "Token refreshed successfully. IMPORTANT: Update your INSTAGRAM_ACCESS_TOKEN env variable with the new token: " +
        data.access_token.substring(0, 10) +
        "...",
      new_token: data.access_token,
    });
  } catch (error) {
    console.error("[Instagram Token Refresh] Failed:", error);
    return NextResponse.json(
      { error: "Failed to refresh token" },
      { status: 500 }
    );
  }
}
