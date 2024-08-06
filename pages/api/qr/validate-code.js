import connectDB from '../../../utils/db';
import CodeStore from '../../../models/CodeStore';

export default async function handler(req, res) {
  await connectDB();

  if (req.method === 'POST') {
    const { enteredCode, sessionId } = req.body;

    try {
      const codeEntry = await CodeStore.findOne({ sessionId });

      if (codeEntry) {
        if (enteredCode === codeEntry.code) {
          await CodeStore.deleteOne({ sessionId });
          res.status(200).json({ valid: true });
        } else {
          res.status(200).json({ valid: false });
        }
      } else {
        res.status(200).json({ valid: false });
      }
    } catch (error) {
      console.error('Error validating code:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
