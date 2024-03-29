export default async (request, context) => {
  const body = await request.json();
  console.log(body)

  const obj = body.payload.email
  console.log(obj)
    
  return new Response()
};