import Image from "next/image";

const FeaturedProjectBillboard = () => {
  return (
    <div className="p-10">
      <h1 className="font-bold text-2xl pb-3">Project Name</h1>
      <div className="flex flex-col gap-x-7 lg:flex-row items-center">
        <Image
          src="https://github.com/manuelrurda/Hangouts/assets/62727899/c7dc473d-6f19-415d-845f-99e792445142"
          alt=""
          width="500"
          height="200"
          className="rounded-md max-h-80 my-3"
        />
        <div className="flex-1 flex flex-col min-w-mi self-start">
          <p className="text-gray-400 my-3">
            Android • Java • Kotlin • Firebase
          </p>
          <p>
            Hangouts is an event/social planner app that allows users to create
            events or "Hangouts" and share them with other users. Then, said
            users can join the event and rank their top picks for meal
            selection. The app then will run an algorithm to process each
            members preferences and calculate which restaurants might be a good
            fit for the member's current cravings. Finally, the app will display
            those restaurants on a map so participants can make a decision on
            where to go.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectBillboard;
