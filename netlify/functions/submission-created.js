export default async (request, context) => {
  const email = JSON.parse(request).payload.email
  console.log(email)
    
  return new Response()
};