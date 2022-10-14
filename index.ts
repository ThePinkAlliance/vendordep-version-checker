import * as core from "@actions/core";
import * as io from "@actions/io";
import * as parser from "gradle-to-ts";
import * as fs from "fs";

type JavaDep = {
	groupId: string;
	artifactId: string;
	version: string;
};

type VendorDep = {
	fileName: string;
	name: string;
	version: string;
	jsonUrl: string;
	mavenUrls: string[];
	javaDependencies: JavaDep[];
};

async function run() {
	const vendordepEntry = core.getInput("vendor-json");
	const gradleEntry = core.getInput("build-gradle");

	const vendordepContents = await fs.readFileSync(vendordepEntry).toString();
	const buildContents = await fs.readFileSync(gradleEntry);

	const vendordepParsed: VendorDep = JSON.parse(vendordepContents).data;
	const buildParsed = parser;

	const vendordepPath = "./" + vendordepParsed["fileName"];
	const gradlePath = "./" + vendordepParsed["fileName"];
}
