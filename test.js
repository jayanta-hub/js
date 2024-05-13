// let template = {
//   template: {
//     id: "apf-category_tech-1",
//     name: "Technology",
//     category: "technology",
//     description: "",
//     destinationPath: "test",
//   },
//   pages: [
//     {
//       title: "Page title",
//       briks: [
//         {
//           brikId: "",
//           brikName: "brik 1",
//           editorId: "",
//           version: "*",
//           editable: true,
//           style: {
//             font: {
//               family: "",
//               size: "",
//               style: "",
//               color: "",
//               weight: "",
//             },
//             backgroundColor: "",
//             color: "",
//           },
//           data: [
//             {
//               content: {
//                 value: "",
//                 label: "background Image",
//                 type: "img",
//                 for: "",
//                 link: "https://media.istockphoto.com/id/1277063263/vector/abstract-blue-blurred-background.jpg?s=1024x1024&w=is&k=20&c=Vc0ue-oNP81lGbR7yJjouT8vXMVcxFvT18O8R1Pty1c=",
//               },
//               style: {
//                 font: {
//                   family: "",
//                   size: "",
//                   style: "",
//                   color: "",
//                   weight: "",
//                 },
//                 backgroundColor: "",
//               },
//               editable: true,
//               display: "block",
//             },
//             {
//               brikId: "",
//               brikName: "brik 2",
//               editorId: "",
//               version: "*",
//               editable: true,
//               style: {
//                 font: {
//                   family: "",
//                   size: "",
//                   style: "",
//                   color: "",
//                   weight: "",
//                 },
//                 backgroundColor: "",
//                 color: "",
//               },
//               data: [
//                 {
//                   content: {
//                     value: "",
//                     label: "background Image",
//                     type: "img",
//                     for: "",
//                     link: "https://media.istockphoto.com/id/1277063263/vector/abstract-blue-blurred-background.jpg?s=1024x1024&w=is&k=20&c=Vc0ue-oNP81lGbR7yJjouT8vXMVcxFvT18O8R1Pty1c=",
//                   },
//                   style: {
//                     font: {
//                       family: "",
//                       size: "",
//                       style: "",
//                       color: "",
//                       weight: "",
//                     },
//                     backgroundColor: "",
//                   },
//                   editable: true,
//                   display: "block",
//                 },
//               ],
//             },
//             [
//               {
//                 content: {
//                   value: "",
//                   label: "background Image",
//                   type: "img",
//                   for: "",
//                   link: "https://media.istockphoto.com/id/1277063263/vector/abstract-blue-blurred-background.jpg?s=1024x1024&w=is&k=20&c=Vc0ue-oNP81lGbR7yJjouT8vXMVcxFvT18O8R1Pty1c=",
//                 },
//                 style: {
//                   font: {
//                     family: "",
//                     size: "",
//                     style: "",
//                     color: "",
//                     weight: "",
//                   },
//                   backgroundColor: "",
//                 },
//                 editable: true,
//                 display: "block",
//               },
//             ],
//             [
//               {
//                 brikId: "",
//                 brikName: "brik 3",
//                 editorId: "",
//                 version: "*",
//                 editable: true,
//                 style: {
//                   font: {
//                     family: "",
//                     size: "",
//                     style: "",
//                     color: "",
//                     weight: "",
//                   },
//                   backgroundColor: "",
//                   color: "",
//                 },
//                 data: [
//                   {
//                     content: {
//                       value: "",
//                       label: "background Image",
//                       type: "img",
//                       for: "",
//                       link: "https://media.istockphoto.com/id/1277063263/vector/abstract-blue-blurred-background.jpg?s=1024x1024&w=is&k=20&c=Vc0ue-oNP81lGbR7yJjouT8vXMVcxFvT18O8R1Pty1c=",
//                     },
//                     style: {
//                       font: {
//                         family: "",
//                         size: "",
//                         style: "",
//                         color: "",
//                         weight: "",
//                       },
//                       backgroundColor: "",
//                     },
//                     editable: true,
//                     display: "block",
//                   },
//                 ],
//               },
//             ],
//           ],
//         },
//       ],
//     },
//   ],
//   plaster: {
//     brikPlaster: {
//       brikId: "@apf/brik-plaster",
//       brikName: "BrikPlaster",
//       isInternal: false,
//       version: "*",
//       globalCss: true,
//       data: {
//         editChildren: true,
//         showEdit: true,
//       },
//     },
//   },
// };
// function getBrikNames(template) {
//   const brikNames = [];
//   function getNastedBriksNames(briks) {
//     for (const brik of briks) {
//       if (brik.hasOwnProperty("brikName")) brikNames.push(brik?.brikName);
//       if (brik.hasOwnProperty("data") && Array.isArray(brik?.data))
//         getNastedBriksNames(brik?.data);
//       if (Array.isArray(brik)) getNastedBriksNames(brik);
//     }
//   }

const { hasOwnProperty } = require("@bhairesh/ez.js");

//   for (const page of template.pages) {
//     if (!page?.briks.length) continue;
//     for (const brik of page.briks) {
//       if (brik.hasOwnProperty("brikName")) brikNames.push(brik.brikName);
//       if (brik.hasOwnProperty("data") && Array.isArray(brik?.data))
//         getNastedBriksNames(brik?.data);
//     }
//   }
//   return brikNames;
// }

// const allBriksNames = getBrikNames(template);
// console.log(allBriksNames);
// console.log(hasOwnProperty({ a: 1, b: 2, c: 3 }, "a", Boolean));

// let x = {
//   brikId: "222",
//   brikName: "brik 1",
//   editorId: "",
//   version: "*",
//   editable: true,
//   style: {
//     font: {
//       family: "sss",
//       size: "",
//       style: "",
//       color: "",
//       weight: "",
//     },
//     backgroundColor: "",
//   },
//   data: [
//     {
//       content: [null],
//       style: [null],
//       editable: true,
//       display: "block",
//     },
//     {
//       brikId: "123",
//       brikName: "brik 2",
//       editorId: "",
//       version: "*",
//       editable: true,
//       style: [null],
//       data: [null],
//     },
//     [[null]],
//     [[null]],
//   ],
//   display: "block",
// };

const modifiedProps = (object, keyMap) =>
  Object.keys(object).reduce(
    (acc, key) => (
      console.log("acc", acc),
      console.log("key", key),
      console.log("qsqsqs", {
        [keyMap[key] || key]: object[key],
      }),
      {
        ...acc,
        ...{ [keyMap[key] || key]: object[key] },
      }
    ),
    {}
  );
console.log(modifiedProps({ a: "ba", b: "ca" }, { a: "bac" }));
