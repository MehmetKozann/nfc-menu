import { NextResponse } from 'next/server';
import { getCafeConfig } from '@/lib/api';

export async function GET() {
  const config = await getCafeConfig();
  const ssid = config.wifi.ssid || 'RoastBloom_Guest';
  const password = config.wifi.password || 'artisan_coffee';
  const encryptionType = config.wifi.securityType === 'WEP' ? 'WEP' : 'WPA';

  const uuid1 = '9F8D34A1-5B2E-4A61-8C8E-78D82A35B911';
  const uuid2 = '4C2E9A7B-1F6D-45A8-B93E-61D98E52A422';

  const mobileConfigXml = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>PayloadDisplayName</key>
    <string>${ssid} Wi-Fi</string>
    <key>PayloadDescription</key>
    <string>Roast &amp; Bloom Cafe Misafir Wi-Fi Ağına Otomatik Bağlantı Profili</string>
    <key>PayloadOrganization</key>
    <string>Roast &amp; Bloom</string>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>${uuid1}</string>
    <key>PayloadVersion</key>
    <integer>1</integer>
    <key>PayloadIdentifier</key>
    <string>com.roastbloom.wifi</string>
    <key>PayloadContent</key>
    <array>
        <dict>
            <key>PayloadType</key>
            <string>com.apple.wifi.managed</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
            <key>PayloadIdentifier</key>
            <string>com.roastbloom.wifi.network</string>
            <key>PayloadUUID</key>
            <string>${uuid2}</string>
            <key>PayloadDisplayName</key>
            <string>${ssid}</string>
            <key>SSID_STR</key>
            <string>${ssid}</string>
            <key>HIDDEN_NETWORK</key>
            <false/>
            <key>AutoJoin</key>
            <true/>
            <key>EncryptionType</key>
            <string>${encryptionType}</string>
            <key>Password</key>
            <string>${password}</string>
        </dict>
    </array>
</dict>
</plist>`;

  return new NextResponse(mobileConfigXml, {
    status: 200,
    headers: {
      'Content-Type': 'application/x-apple-aspen-config; charset=utf-8',
      'Content-Disposition': `attachment; filename="${ssid}.mobileconfig"`,
      'Cache-Control': 'no-cache, no-store, must-revalidate'
    }
  });
}
