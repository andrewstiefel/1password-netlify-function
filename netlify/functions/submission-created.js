export default async (request) => {
    const email = JSON.parse(request.body).payload.email
    console.log(`Received a submission: ${email}`)
    
    return new Response()
};