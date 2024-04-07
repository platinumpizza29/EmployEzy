import { JobOpenings, PrismaClient } from "@prisma/client";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import Navbar from "~/components/navbar";

export default async function HomePage() {
  const prisma = new PrismaClient();
  const jobs: JobOpenings[] = await prisma.jobOpenings.findMany();

  return (
    <main className="min-w-screen min-h-screen">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <div className="md:px-8 md:py-2">
            <Navbar />
          </div>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          {/* Discover jobs */}
          <section className="p-8">
            <h1 className="text-4xl">Discover Jobs</h1>
            <div className="my-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {jobs.map((item, index) => (
                <div className="card w-full border-2 bg-base-100" key={index}>
                  <div className="card-body">
                    <h2 className="card-title">{item.opening_name}</h2>
                    <p>{item.location}</p>
                    <div className="flex flex-row items-center">
                      {item.job_tags.map((tag, index) => (
                        <div
                          className="badge badge-secondary badge-outline mx-1"
                          key={index}
                        >
                          {tag}
                        </div>
                      ))}
                    </div>

                    <div className="card-actions justify-end">
                      <Link href={`/home/${item.opening_id}`} className="">
                        <button className="btn btn-primary">
                          <p className="mx-2">Apply Now</p>
                          <FaLongArrowAltRight />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu min-h-full w-80 bg-base-200 p-4 text-base-content">
            {/* Sidebar content here */}
            <li>
              <a>Discover</a>
            </li>
            <li>
              <a>Applied Jobs</a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
