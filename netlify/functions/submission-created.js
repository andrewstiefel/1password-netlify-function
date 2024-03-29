export default async (request, context) => {
  const body = await request.json();
  const obj = JSON.parse(body);
  console.log(obj.email)
    
  return new Response()
};