export default function Id({ params }: { params: { id: string } }) 
{
    return <div>My Post: {params.id}</div>
  }