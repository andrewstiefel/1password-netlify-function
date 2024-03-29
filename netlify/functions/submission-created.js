export default async (request, context) => {
  const body = await request.json()
  console.log(body)
    
  return new Response()
};