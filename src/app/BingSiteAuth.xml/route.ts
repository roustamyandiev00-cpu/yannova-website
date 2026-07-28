import { NextResponse } from 'next/server'

export async function GET() {
  const xml = `<?xml version="1.0"?>
<users>
	<user>C3661B0C83BA01EC518D069DF5501B8F</user>
</users>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
