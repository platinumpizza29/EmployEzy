import { PrismaClient } from "@prisma/client";
import { CodeEditor } from "~/components/editor";
import { type JobOpenings } from "~/types/jobTypes";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function AssignmentPage({ params }) {
  console.log(params);
  const prisma = new PrismaClient();
  const job: JobOpenings = await prisma.jobOpenings.findUnique({
    where: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      opening_id: parseInt(params.assignment),
    },
  });
  if (!job) {
    return <div>Job not found</div>;
  }
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <CodeEditor />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu min-h-full w-80 bg-base-200 p-4 text-base-content">
          <div className="flex flex-1 flex-col">
            <h1 className="text-2xl">{job.opening_name}</h1>
            <p className="my-8">{job.assignment_problem_statement}</p>
          </div>
          <button className="btn btn-primary w-full">Submit</button>
        </div>
      </div>
    </div>
  );
}
