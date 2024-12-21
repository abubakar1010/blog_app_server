import { FilterQuery, Query } from "mongoose";

class QueryBuilder<T> {
	public modelQuery: Query<T[], T>;
	public query: Record<string, unknown>;

	constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
		this.modelQuery = modelQuery;
		this.query = query;
	}

	search(searchFields: string[]) {
		let search = "";

		if (this?.query?.search) search = this.query.search as string;

		this.modelQuery = this.modelQuery.find({
			$or: searchFields.map(
				(field: string) =>
					({
						[field]: { $regex: search, $options: "i" },
					}) as FilterQuery<T>
			),
		});

		return this;
	}

	filter() {
		const queryObj: Record<string, unknown> = { ...this.query };
		const excludeField = ["search", "sortBy", "sortOrder"];
		excludeField.map((field) => delete queryObj[field]);
		this.modelQuery = this.modelQuery.find(queryObj);
		return this;
	}

	sort() {
		let sort = "createdAt";
		if (this.query.sort) sort = this.query.sort as string;
		let sortOrder = 1;
		if (this.query.sortOrder === "desc") sortOrder = -1;
		this.modelQuery = this.modelQuery.sort({ [sort]: sortOrder } as {
			[key: string]: 1 | -1;
		});
		return this;
	}
}

export default QueryBuilder;
