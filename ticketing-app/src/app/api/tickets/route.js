export async function POST(request) {
  const ticket = await request.json()
  console.log('Received ticket:', ticket) // Logging input data

  // Log cookies
  const cookies = request.headers.cookie
  console.log('Cookies:', cookies)

  // get supabase instance
  const supabase = createRouteHandlerClient({ cookies })

  // get current user session
  const {
    data: { session },
  } = await supabase.auth.getSession()
  console.log('Session:', session) // Logging session

  // insert the data
  const { data, error } = await supabase
    .from('tickets')
    .insert({
      ...ticket,
      user_email: session.user.email,
    })
    .select()
    .single()

  if (error) {
    console.error('Supabase insert error:', error) // Logging Supabase error
    return NextResponse.json({ error: error.message })
  }

  return NextResponse.json({ data })
}
