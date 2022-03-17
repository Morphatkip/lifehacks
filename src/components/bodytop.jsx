import books from "../images/books.PNG";
function bodyTop() {
  return (
    <div className="pt-5">
      <div
        className="container"
        style={{
          backgroundImage: `url(${books})`,
          backgroundPosition: "centre",
          backgroundSize: "cover",
        }}
      >
        <div class="px-4 py-5 text-center text-light">
          <h1 class="display-5 fw-bold">Academic materials</h1>
          <div class="col-lg-6 mx-auto">
            <p class="lead mb-4">
              As a student, you’ll need to learn a lot of new information pretty
              fast or risk being clueless, and more than a bit confused. This is
              where the internet steps in, a realm of student resources with
              bountiful information about anything, where you can learn the
              things you are not taught.. In short, all the student resources
              you could ever possibly need are available online.This site offers
              academic materials ranging from various disciplines. These
              academic materials are sample written by tutours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default bodyTop;
