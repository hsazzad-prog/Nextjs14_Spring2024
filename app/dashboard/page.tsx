import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import Session from '../components/session';
import UserCard from '../components/usercard';

export default async function Dashboard() {
  const response: any = await axios.get('http://localhost:8000/admin/allusers');
  const jsondata = response.data;


  return (<>
    <Session />
    <div className=" justify-center bg-gray-50 py-5 px-4 sm:px-6 lg:px-8">
      <Toaster />

      <div className="grid grid-cols-3 gap-2">
        {jsondata.map((items: any, index: any) => {
          return (<div key={index}>

            <UserCard data={items} />
          </div>

          );
        }


        )}
      </div>
    </div>
  </>);
}



