/**
379. Design Phone Directory
Medium

252

349

Add to List

Share
Design a phone directory that initially has maxNumbers empty slots that can store numbers. The directory should store numbers, check if a certain slot is empty or not, and empty a given slot.

Implement the PhoneDirectory class:

PhoneDirectory(int maxNumbers) Initializes the phone directory with the number of available slots maxNumbers.
int get() Provides a number that is not assigned to anyone. Returns -1 if no number is available.
bool check(int number) Returns true if the slot number is available and false otherwise.
void release(int number) Recycles or releases the slot number.


Example 1:

Input
["PhoneDirectory", "get", "get", "check", "get", "check", "release", "check"]
[[3], [], [], [2], [], [2], [2], [2]]
Output
[null, 0, 1, true, 2, false, null, true]

Explanation
PhoneDirectory phoneDirectory = new PhoneDirectory(3);
phoneDirectory.get();      // It can return any available phone number. Here we assume it returns 0.
phoneDirectory.get();      // Assume it returns 1.
phoneDirectory.check(2);   // The number 2 is available, so return true.
phoneDirectory.get();      // It returns 2, the only number that is left.
phoneDirectory.check(2);   // The number 2 is no longer available, so return false.
phoneDirectory.release(2); // Release number 2 back to the pool.
phoneDirectory.check(2);   // Number 2 is available again, return true.


Constraints:

1 <= maxNumbers <= 104
0 <= number < maxNumbers
At most 2 * 104 calls will be made to get, check, and release.
 */


/**
 * Initialize your data structure here
        @param maxNumbers - The maximum numbers that can be stored in the phone directory.
 * @param {number} maxNumbers
 */
        var PhoneDirectory = function(maxNumbers) {
          this.numbers = {};
          this.nextAvail;
          this.length = maxNumbers;

          if (maxNumbers >= 1) {
              this.nextAvail = 0;
          }

          for (let i = 0; i < maxNumbers; i++) {
              this.numbers[i] = true;
          }
      };

      /**
       * Provide a number which is not assigned to anyone.
              @return - Return an available number. Return -1 if none is available.
       * @return {number}
       */
      PhoneDirectory.prototype.get = function() {
          if (this.nextAvail < this.length) {
              this.numbers[this.nextAvail] = false;
              const answer = this.nextAvail;
              for (let i = this.nextAvail+1; i < this.length; i++) {
                  if (this.numbers[i] === true) {
                      this.nextAvail = i;
                      break;
                  }
                  this.nextAvail = this.length;
              }
              return answer;
          } else {
              return -1;
          }
      };

      /**
       * Check if a number is available or not.
       * @param {number} number
       * @return {boolean}
       */
      PhoneDirectory.prototype.check = function(number) {
          return this.numbers[number];
      };

      /**
       * Recycle or release a number.
       * @param {number} number
       * @return {void}
       */
      PhoneDirectory.prototype.release = function(number) {
          this.numbers[number] = true;
          this.nextAvail = number;
      };

      /**
       * Your PhoneDirectory object will be instantiated and called as such:
       * var obj = new PhoneDirectory(maxNumbers)
       * var param_1 = obj.get()
       * var param_2 = obj.check(number)
       * obj.release(number)
       */
