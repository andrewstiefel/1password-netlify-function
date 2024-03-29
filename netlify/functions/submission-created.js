export default async (request, context) => {
  const body = await request.json();
  console.log(body)

  const obj = JSON.parse(body)
  console.log(obj.payload.email)
    
  return new Response()
};