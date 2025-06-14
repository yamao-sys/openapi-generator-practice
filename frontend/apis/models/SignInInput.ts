/* tslint:disable */
/* eslint-disable */
/**
 * (title)
 * A sample service
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from "../runtime";
/**
 *
 * @export
 * @interface SignInInput
 */
export interface SignInInput {
  /**
   *
   * @type {string}
   * @memberof SignInInput
   */
  email: string;
  /**
   *
   * @type {string}
   * @memberof SignInInput
   */
  password: string;
}

/**
 * Check if a given object implements the SignInInput interface.
 */
export function instanceOfSignInInput(value: object): value is SignInInput {
  if (!("email" in value) || value["email"] === undefined) return false;
  if (!("password" in value) || value["password"] === undefined) return false;
  return true;
}

export function SignInInputFromJSON(json: any): SignInInput {
  return SignInInputFromJSONTyped(json, false);
}

export function SignInInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): SignInInput {
  if (json == null) {
    return json;
  }
  return {
    email: json["email"],
    password: json["password"],
  };
}

export function SignInInputToJSON(json: any): SignInInput {
  return SignInInputToJSONTyped(json, false);
}

export function SignInInputToJSONTyped(value?: SignInInput | null, ignoreDiscriminator: boolean = false): any {
  if (value == null) {
    return value;
  }

  return {
    email: value["email"],
    password: value["password"],
  };
}
