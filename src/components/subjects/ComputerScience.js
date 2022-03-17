import { Accordion } from "react-bootstrap";
function Computer() {
  return (
    <div className="container " pt-5>
      <span className="text-center  display-6 fw-bold text-light">
        Computer Science
      </span>
      <div style={{ margin: 10 }} className=" text-dark">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Biometric Authentication</Accordion.Header>
            <Accordion.Body>
              <p>
                Biometrics is the examination of unique biological information
                utilizing modern technology. Biometric authentication is a
                security identification process that uses biometrics to identify
                an individual. A saved biometric data of an individual from a
                database is compared to a captured biometric; authentication
                will be correct if the two data matches (Rouse, 2020). This
                essay explores five biometric authentication technologies;
                Retina scans, Iris recognition, voice recognition, fingerprint,
                and voice recognition. The security challenges of each method
                are also explored.{" "}
              </p>
              <p>
                The biometric authentication methods work in their unique way.
                The fingerprint scanner captures the unique arches, loops, and
                whorls in each fingers' pattern. Minutiae detection algorithm is
                used in the analysis of the print. Retina scans utilize the
                capillaries in the eyes as their basis for data comparison. Iris
                recognition uses the black, ring-shaped part of the aye. The
                part has unique structures like a thread that runs from the
                center; this is biometric that is used. The voice of the human
                is uniquely characterized by the accent, tone, pace, and
                variation. The voice recognition technique employs these
                characteristics. In facial recognition, the unique pattern used
                is the face's geometry, distance from forehead to chin, the
                distance between eyes, and other points in the face (Rouse,
                2020).
              </p>
              <p>
                The security issue that poses a threat to biometric
                authentication (Rathgeb et al.,2012) is outlined below. The
                Authentication method is listed and an explanation of the
                security challenge.
                <ol>
                  <li>
                    {" "}
                    Facial recognition – spoof a face with a 3D mask and
                    environmental factors is the uncertainty of data security in
                    face recognition.
                  </li>
                  <li>
                    {" "}
                    Voice recognition - The primary security threat to the
                    system is the impersonation of voice.
                  </li>
                  <li>
                    {" "}
                    Retina and Iris scans – A high-quality image of an original
                    retina/Iris can trick the scanners into validating access,
                  </li>
                  <li>
                    {" "}
                    Fingerprint - A malicious program can attack a computerized
                    system and extract the owner's fingerprint; also, a stored
                    template of the fingerprint can be extracted from the
                    non-volatile memory and features of the fingerprint restored
                    by decoding the template.
                  </li>
                </ol>
              </p>
              <p>
                In conclusion, Biometric authentication is a security process
                where access to a computerized system is gained using the human
                being's unique biological, physical features. The biometric
                authentication methods are Facial recognition, voice
                recognition, retina scans, iris scans, and fingerprint. The
                methods use the unique features that the body parts have in the
                authentication process. However, the authentication is prone to
                some security issues.
              </p>
              <h1>References</h1> <br />
              Rathgeb, C., & Busch, C. (2012). Multi-biometric template
              protection: Issues and challenges. New trends and developments in
              biometrics, 173-190. <br />
              <br />
              Rouse, M. (2020). What is biometric authentication? - Definition
              from WhatIs.com. Retrieved 13 November 2020, from
              https://searchsecurity.techtarget.com/definition/biometric-authentication
              <br />
              <br />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Impact of human behavior on Information technology
            </Accordion.Header>
            <Accordion.Body>
              <p>
                {" "}
                Human behaviour alludes to the manner in which people act and
                interfere. It depends and affected by a few components such as,
                hereditary make-up, culture and individual qualities and
                mentalities. On the other hand, Information Technology (IT)
                refers to the use of technology to solve organizational and
                business problems (Orlikowski & Baroudi, 1991). This may include
                storing, retrieving and manipulation of data. This paper focuses
                on how human behaviour impact Information technology, and how
                the impact can be managed.
              </p>
              <p>
                {" "}
                Human beings have a tendency of looking for an easier way to do
                work. Fortunately, Information technology offers efficient way
                to do this. Human beings push their limits in creating
                artificial Intelligence systems which automates most of the
                daily routines (Calhoun, Teng & Cheon, 2002). The routines may
                be range from simple tasks like sweeping to advanced tasks like
                assembling cars. This can be a good and satisfactory invention
                in IT. However, this new emergence should be made safe for human
                lives. This includes detailed research on the systems and
                assessing every possible outcome and how it can be efficiently
                dealt with.
              </p>
              <p>
                {" "}
                The associated negative outcomes of the systems cannot be
                overlooked. With such automated routines it expected that less
                human labour will be needed. This will lead to a decline in job
                opportunities and also the widely contemplated issue of computer
                revolution. To curb this effects, Information Technology systems
                should not be made smarter than human beings. It is of
                importance that its ability to think should be limited to only
                the task in hand. It should also be made more expensive than
                human labour so that majority of people will opt to human
                labour.
              </p>
              <p>
                {" "}
                In conclusion human behaviour leads to new inventions in
                Information technology. Artificial Intelligence has a number of
                merits despite the associated negative impacts it has. A
                detailed research of its functionality is mandatory for
                assurance of human safety and dealing with any repercussion of
                the systems.
              </p>
              <h1>References </h1>
              Calhoun, K. J., Teng, J. T., & Cheon, M. J. (2002). Impact of
              national culture on information technology usage behaviour: an
              exploratory study of decision making in Korea and the USA.
              Behaviour & Information Technology, 21(4), 293-302.
              <br /> <br />
              Orlikowski, W. J., & Baroudi, J. J. (1991). Studying information
              technology in organizations: Research approaches and assumptions.
              Information systems research, 2(1), 1-28.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div></div>
    </div>
  );
}

export default Computer;
