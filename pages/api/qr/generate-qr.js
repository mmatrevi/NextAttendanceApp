import QRCode from 'qrcode';
import { v4 as uuidv4 } from 'uuid';
import connectDB from '../../../utils/db';
import CodeStore from '../../../models/CodeStore';
import { generateUniqueCode } from '../../../utils/generateUniqueCode';

export default async function handler(req, res) {
  await connectDB();

  if (req.method === 'GET') {
    try {
      const uniqueCode = generateUniqueCode(10);
      const qrCodeData = await QRCode.toDataURL(uniqueCode);
      const sessionId = uuidv4();

      const newCodeEntry = new CodeStore({ sessionId, code: uniqueCode });
      await newCodeEntry.save();

      console.log(`Generated Code: ${uniqueCode}, Session ID: ${sessionId}`);
      res.status(200).json({ qrCodeData, sessionId });
    } catch (error) {
      console.error('Error generating QR code:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
