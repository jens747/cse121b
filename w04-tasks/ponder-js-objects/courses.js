// const aCourse = {
//   code: "CSE121b",
//   name: "Javascript Language",
// };

const availCourses = {
  aCourse: {
    code: "CSE121b",
    name: "Javascript Language",
    "current grade": "A",
    sections: [
      {
        sectionNum: 1,
        roomNum: "STC 353",
        enrolled: 26,
        days: "TTh",
        instructor: "Bro T",
      },
      {
        sectionNum: 2,
        roomNum: "STC 347",
        enrolled: 28,
        days: "TTh",
        instructor: "Sis A",
      },
    ],
    enrollstudent: function (sectionNum) {
      this.sections.forEach((section) => {
        if (sectionNum === section.sectionNum) {
          console.log("Enrolled");
          section.enrolled++;
          renderTableSec(this.sections);
        } else {
          console.log("No Section");
        }
      });
    },
    dropstudent: function (sectionNum) {
      this.sections.forEach((section) => {
        if (sectionNum === section.sectionNum) {
          console.log("Dropped");
          section.enrolled--;
          renderTableSec(this.sections);
        } else {
          console.log("No Section");
        }
      });
    },
    updatestudent: function (sectionNum, drop = false) {
      this.sections.forEach((section) => {
        if (sectionNum === section.sectionNum && drop) {
          console.log("Enrolled");
          section.enrolled++;
          renderTableSec(this.sections);
        } else if (sectionNum === section.sectionNum && !drop) {
          console.log("Dropped");
          section.enrolled--;
          renderTableSec(this.sections);
        } else {
          console.log("No Section");
        }
      });
    },
  },

  bCourse: {
    code: "CSE210",
    name: "Programming with Classes",
    "current grade": "A",
  },

  cCourse: {
    code: "WDD230",
    name: "Web Front-End Development I",
    "current grade": "A",
  },
};

function setNameAndCode(courseObj) {
  const setCourseName = document.querySelector("#courseName");
  const setCourseCode = document.querySelector("#courseCode");

  const cName = courseObj.name;
  const cCode = courseObj.code;

  setCourseName.textContent = cName;
  setCourseCode.textContent = cCode;
}

function renderTableSec(sectionAr) {
  const tableSections = document.querySelector("#sections");

  // Map html to section object array elements
  const section = sectionAr.map(
    (element) => `<tr>
      <td>${element.sectionNum}<\/td>
      <td>${element.roomNum}<\/td>
      <td>${element.enrolled}<\/td>
      <td>${element.days}<\/td>
      <td>${element.instructor}<\/td>
    <\/tr>`
  );

  // Insert section html to table
  tableSections.innerHTML = section.join("");
}

// availCourses.aCourse.enrollstudent(2);
setNameAndCode(availCourses.aCourse);
renderTableSec(availCourses.aCourse.sections);
// const addNameAndCode = setNameAndCode(availCourses);
// const x = document.querySelector("#enrollStudent");
// x.onclick = addNameAndCode;

document.querySelector("#enrollStudent").addEventListener("click", () => {
  const sectionNum = document.querySelector("#sectionNumber").value;
  // availCourses.aCourse.enrollstudent(parseInt(sectionNum));
  availCourses.aCourse.updatestudent(parseInt(sectionNum), true);
});

document.querySelector("#dropStudent").addEventListener("click", () => {
  const sectionNum = document.querySelector("#sectionNumber").value;
  // availCourses.aCourse.dropstudent(parseInt(sectionNum));
  availCourses.aCourse.updatestudent(parseInt(sectionNum));
});
