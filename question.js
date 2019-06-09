
const questions = {
 inputOne: [
    {
      type: 'input',
      name: 'advocate',
      message:'Add an advocate',
      validate: function( value ) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter the advocate ID';
        }
      } 
    }
    ],
    inputTwo: [
      {
        type: 'input',
        name: 'seniorId',
        message:'Add a senior advocate id',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter the advocate ID';
          }
        } 
      },
      {
        type: 'input',
        name: 'juniorId',
        message:'Add an junior advocate Id',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter the junior advocate ID';
          }
        } 
      }
      ],
      inputThree: [
        {
          type: 'input',
          name: 'advocateId',
          message:'Advocate name',
          validate: function( value ) {
            if (value.length) {
              return true;
            } else {
              return 'Please enter the advocate ID';
            }
          } 
        },
        {
          type: 'input',
          name: 'state',
          message:'Practicing state',
          validate: function( value ) {
            if (value.length) {
              return true;
            } else {
              return 'Please enter the Practicing state';
            }
          } 
        }
        ],
        inputFour: [
          {
            type: 'input',
            name: 'advocateId',
            message:'Advocate name',
            validate: function( value ) {
              if (value.length) {
                return true;
              } else {
                return 'Please enter the advocate ID';
              }
            } 
          },
          {
            type: 'input',
            name: 'state',
            message:'Practicing state',
            validate: function( value ) {
              if (value.length) {
                return true;
              } else {
                return 'Please enter the practicing state';
              }
            } 
          },
          {
            type: 'input',
            name: 'case',
            message:'case id',
            validate: function( value ) {
              if (value.length) {
                return true;
              } else {
                return 'Please enter the practicing state';
              }
            } 
          }
          ],
          inputFive: [
            {
              type: 'input',
              name: 'advocateId',
              message:'Advocate name',
              validate: function( value ) {
                if (value.length) {
                  return true;
                } else {
                  return 'Please enter the advocate ID';
                }
              } 
            },
            {
              type: 'input',
              name: 'state',
              message:'Practicing state',
              validate: function( value ) {
                if (value.length) {
                  return true;
                } else {
                  return 'Please enter the practicing state';
                }
              } 
            },
            {
              type: 'input',
              name: 'case',
              message:'case id',
              validate: function( value ) {
                if (value.length) {
                  return true;
                } else {
                  return 'Please enter the practicing state';
                }
              } 
            }
            ],
            inputSix:[
              {
                type: 'input',
                name: 'state',
                message:'state id',
                validate: function( value ) {
                  if (value.length) {
                    return true;
                  } else {
                    return 'Please enter the practicing state';
                  }
                } 
              } 
            ]
}

module.exports = questions;



// const questions = [
//     {
//       type: 'input',
//       name: 'firstname',
//       message: 'Customer First Name'
//     },
//     {
//       type: 'input',
//       name: 'lastname',
//       message: 'Customer Last Name'
//     },
//     {
//       type: 'input',
//       name: 'phone',
//       message: 'Customer Phone Number'
//     },
//     {
//       type: 'input',
//       name: 'email',
//       message: 'Customer Email Address'
//     }
//   ];
  